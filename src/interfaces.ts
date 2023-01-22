export interface IQuestion {
  questionText: string
  answers: string[]
  correctAnswersIndexes: number | number[]
  remuneration: string
}

export interface IConfig {
  answerNames: string[]
  questions: IQuestion[]
}
