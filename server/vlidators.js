const Ajv = require("ajv");
const ajv = new Ajv({ allErrors: true, coerceTypes: true, useDefaults: 'empty' });

require('ajv-formats')(ajv);
require('ajv-errors')(ajv);

let user = {
  type: 'object',
  properties: {
    name: {
      type: "string",
      maxLength: 30,
    },
    passward: {
      type: "string",
      maxLength: 20,
      format: "password"
    },
    email: {
      type: "string",
      maxLength: 50,
      format: "email"
    },
    tel: {
      type: "number"
    }
  },
  required: ['name', 'passward', 'email', 'tel'],
  errorMessage: {
    required: {
      'name': 'Enter your name',
      'passward': 'Enter passward',
      'email': 'Enter your email',
      'tel': 'Enter your phone number',
    }
  }
};

let experience = {
  type: 'object',
  properties: {
    job: {
      type: "string",
      maxLength: 30,
    },
    company: {
      type: "string",
      maxLength: 30,
    },
    start: {
      type: "string",
      format: "date",
    },
    end: {
      type: "string",
      format: "date",
    },
    note: {
      type: "string"
    }
  },
  required: ['job', 'company','start', 'end'],
  errorMessage: {
    required: {
      'job': 'Enter the job',
      'company': 'Enter the company',
      'start': 'When did you start working?',
      'end': 'When did you quit working',
    }
  }
};

let education= {
  type: 'object',
  properties: {
    school: {
      type: "string",
      maxLength: 30,
    },
    start: {
      type: "string",
      format: "date",
    },
    end: {
      type: "string",
      format: "date",
    },
    note: {
      type: "string"
    }
  },
  required: ['school','start', 'end'],
  errorMessage: {
    required: {
      'school': 'Enter the school',
      'start': 'When did you start enter the school?',
      'end': 'When did you graduate',
    }
  }
};

exports.userFormValidator = (req, res, next) => {
  const validate = ajv.compile(user);
  validate(req.body);
  res.local = validate.errors;
  next();
};

exports.experienceFormValidator = (req, res, next) => {
  const validate = ajv.compile(experience);
  validate(req.body);
  res.local = validate.errors;
  next();
};

exports.educationFormValidator = (req, res, next) => {
  const validate = ajv.compile(education);
  validate(req.body);
  res.local = validate.errors;
  next();
};



