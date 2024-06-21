import { Request, Response } from 'express';
import { addSubmission, deleteSubmissionByIndex, getSubmissionByIndex } from '../repositories/submissionRepository.js';
import { Submission } from '../models/submission.js';
import { handleValidationErrors, validateSubmission } from '../validations/submissionValidation.js';

// This will always return true 
export const ping = (req: Request, res: Response) => {
  res.json({ success: true });
};

// This request will add the data to db.JSON
export const submit = [
    ...validateSubmission,
    handleValidationErrors,
    async (req: Request, res: Response) => {
      const { name, email, phone, github_link, stopwatch_time } = req.body;

      const newSubmission: Submission = { name, email, phone, github_link, stopwatch_time };
      addSubmission(newSubmission);

      res.status(201).json({ success: true });
    }
  ];

// This request is for Reading  the Data in db.JSON
export const read = (req: Request, res: Response) => {
  const index = parseInt(req.query.index as string, 10);

  if (isNaN(index) || index < 0) {
    return res.status(400).json({ error: 'Invalid index' });
  }

  const submission = getSubmissionByIndex(index);

  if (!submission) {
    return res.status(404).json({ error: 'Submission not found' });
  }

  res.json(submission);
};

// Delete a submission by index
export const del = (req: Request, res: Response) => {
  const index = parseInt(req.query.index as string, 10);

  if (isNaN(index) || index < 0) {
    return res.status(400).json({ error: 'Invalid index' });
  }

  const success = deleteSubmissionByIndex(index);

  if (!success) {
    return res.status(404).json({ error: 'Submission not found' });
  }

  res.status(200).json({ success: true });
};
