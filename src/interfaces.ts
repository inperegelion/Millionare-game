export interface IQuestion {
  questionText: string
  answers: string[]
  correctAnswersIndexes: number
  remuneration: string
}

export interface IConfig {
  answerNames: string[]
  isMultipleResponsesEnabled: boolean
  answerOptionsPerQuestion: number
  zeroWinRemuneration: string
  questions: IQuestion[]
}
