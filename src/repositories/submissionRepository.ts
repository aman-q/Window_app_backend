import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Submission } from '../models/submission.js';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, '../db.json');

export const saveToDatabase = (data: Submission[]) => {
  fs.writeFileSync(dbPath, JSON.stringify({ submissions: data }, null, 2));
};

export const readFromDatabase = (): Submission[] => {
  const rawData = fs.readFileSync(dbPath);
  const jsonData = JSON.parse(rawData.toString());
  return jsonData.submissions;
};

export const addSubmission = (submission: Submission) => {
  const submissions = readFromDatabase();
  submissions.push(submission);
  saveToDatabase(submissions);
};

export const getSubmissionByIndex = (index: number): Submission | null => {
  const submissions = readFromDatabase();
  return submissions[index] || null;
};

export const deleteSubmissionByIndex = (index: number): boolean => {
  const submissions = readFromDatabase();
  if (index >= 0 && index < submissions.length) {
    const deletedSubmission = submissions[index];
    submissions.splice(index, 1);
    saveToDatabase(submissions);
    console.log(deletedSubmission);
    return true;
  }
  return false;
};
