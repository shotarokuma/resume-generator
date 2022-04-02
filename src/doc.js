import { Paragraph, Document, Packer, HeadingLevel, AlignmentType, TextRun } from "docx";
import { saveAs } from "file-saver";
import axios from "axios";

export const createDocx = (user) => {
  axios.get(`/api/v1/users/${user._id}`)
    .then((res) => {
      const user = res.data[0];
      const educationDocx = user.education.map((edu) => {
        if (edu.note) {
          return new Paragraph({
            spacing: {
              before: 100,
            },
            alignment: AlignmentType.LEFT,
            children: [
              new TextRun({
                break: 1,
                text: `${edu.start.substr(0, 10).replaceAll('-', '/')} ~ ${edu.end.substr(0, 10).replaceAll('-', '/')}:       studying  at ${edu.school}`,
              }), new TextRun({
                break: 1,
                text: `                                                 ${edu.note}`
              })
            ]
          });
        }
        return new Paragraph({
          spacing: {
            before: 100,
          },
          alignment: AlignmentType.LEFT,
          children: [
            new TextRun({
              break: 1,
              text: `${edu.start.substr(0, 10).replaceAll('-', '/')} ~ ${edu.end.substr(0, 10).replaceAll('-', '/')}:       studying  at ${edu.school}`,
            })
          ]
        })
      });

      const experienceDocx = user.experience.map((ex) => {
        if (ex.note) {
          return new Paragraph({
            spacing: {
              before: 100,
            },
            alignment: AlignmentType.LEFT,
            children: [
              new TextRun({
                break: 1,
                text: `${ex.start.substr(0, 10).replaceAll('-', '/')} ~ ${ex.end.substr(0, 10).replaceAll('-', '/')}:       ${ex.job}  at ${ex.company}`,
              }), new TextRun({
                break: 1,
                text: `                                                 ${ex.note}`
              })
            ]
          });
        }
        return new Paragraph({
          spacing: {
            before: 100,
          },
          alignment: AlignmentType.LEFT,
          children: [
            new TextRun({
              break: 1,
              text: `${ex.start.substr(0, 10).replaceAll('-', '/')} ~ ${ex.end.substr(0, 10).replaceAll('-', '/')}:       ${ex.job}  at ${ex.company}`,
            })
          ]
        })
      });

      const historyOfeducation = [new Paragraph({
        spacing: {
          before: 700
        },
        heading: HeadingLevel.HEADING_3,
        text: "Education",
      })].concat(educationDocx);

      const historyOfJof = [new Paragraph({
        spacing: {
          before: 700
        },
        heading: HeadingLevel.HEADING_3,
        text: "Experience",
      })].concat(experienceDocx);

      const history = historyOfeducation.concat(historyOfJof);

      const doc = new Document({
        sections: [
          {
            children: [
              new Paragraph({
                text: "My Resume",
                heading: HeadingLevel.TITLE,
                alignment: AlignmentType.CENTER,
              }),
              new Paragraph({
                spacing: {
                  before: 300
                },
                heading: HeadingLevel.HEADING_2,
                text: `${user.name}`,
              }),
              new Paragraph({
                text: `${user.tel}`,
                alignment: AlignmentType.RIGHT,
              }),
              new Paragraph({
                text: `${user.email}`,
                alignment: AlignmentType.RIGHT,
              }),
              new Paragraph({
                text: "",
              }),
            ].concat(history)
          }
        ]
      });
      Packer.toBlob(doc).then((blob) => {
        saveAs(blob, "resume.docx");
      });
    })
    .catch((e) => alert(e));
}
