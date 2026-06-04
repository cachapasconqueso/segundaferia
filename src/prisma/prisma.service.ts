import 'dotenv/config'; // ← carga el .env ANTES que todo lo demás

import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    const url = process.env.DATABASE_URL;

    // Verificación: si la URL no está, muestra error claro
    if (!url) {
      throw new Error('❌ DATABASE_URL no está definida. Verifica tu archivo .env');
    }

    const pool = new Pool({ connectionString: url });
    const adapter = new PrismaPg(pool);
    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
    console.log('✅ Prisma conectado a la base de datos');
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
