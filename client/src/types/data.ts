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

export interface IAdvantage {
  id: number,
  title: string,
  description: string,
  svg: string
}

export interface IFeedbackFields {
  name: string,
  email: string,
  phone: number
}
