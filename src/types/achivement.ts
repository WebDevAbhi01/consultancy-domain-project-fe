export interface Achievement {
  id: string
  value: string
  label: string
  description: string
  icon: string
}

export interface CaseStudy {
  id: string
  client: string
  industry: string
  challenge: string
  result: string
  subsidy: string
  duration: string
}

export interface Award {
  id: string
  title: string
  body: string
  year: string
}