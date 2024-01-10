export interface IQuestions {
  id: number,
  question: string,
  answer: string
}

export interface IFAQ {
  id: number,
  title: string,
  svg: string,
  status: boolean,
  questions: IQuestions[]
}

export interface IFeedbackFields {
  name: string,
  email: string,
  phone: number
}
