import { body, ValidationChain, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

//  rules for validation 
export const validateSubmission: ValidationChain[] = [
  body('name').isLength({ max: 15 }).withMessage('Name must be less than 15 characters'),
  body('email').isEmail().withMessage('Invalid email address'),
  body('phone').isLength({ min: 10, max: 10 }).isNumeric().withMessage('Phone number must be 10 digits'),
  body('github_link').isURL({ protocols: ['https'], require_protocol: true }).withMessage('Invalid GitHub link'),
  body('stopwatch_time').isInt({ min: 0 }).withMessage('Stopwatch time must be greater than 0'),
];

// validation result handler middleware
export const handleValidationErrors = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
