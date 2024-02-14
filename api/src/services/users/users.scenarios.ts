import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: { data: { email: 'String3645278' } },
    two: { data: { email: 'String2623217' } },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
