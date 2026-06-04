// prisma.config.ts
// En Prisma v7, la URL de conexión va AQUÍ, no en schema.prisma

import 'dotenv/config'
import { defineConfig } from '@prisma/config'

export default defineConfig({
  datasource: {
    url: process.env.DATABASE_URL!,
  },
})
