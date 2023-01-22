import { IConfig, IQuestion } from '../interfaces';
import config from './game.json';

config as IConfig;

export function getConfig(): IConfig {
  return config;
}

export function getQuestions(): IQuestion[] {
  return config.questions;
}

export function getQuestion(i: number): IQuestion | null {
  if (i >= 0 && i < config.questions.length) {
    return config.questions[i];
  }
  return null;
}

export function getRemunerations(): string[] {
  const questions = getQuestions();
  return questions.map((question) => question.remuneration);
}
