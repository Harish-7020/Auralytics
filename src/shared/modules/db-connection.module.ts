import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import * as config from 'dotenv';

config.config();
  
  const entities = [
    User,
  ]
  @Module({
    imports: [
      TypeOrmModule.forRoot({
        type: process.env.DATABASE as any,
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        // logging: true,
        entities: entities,
        synchronize: true,
        logging: false,
        requestTimeout: 60000,
        pool: {
          max: 1000, // Max number of connections
          min: 2, // Min number of connections
          idleTimeoutMillis: 30000, // How long a connection can sit idle before being released (30 seconds)
        },
        extra: {
          trustServerCertificate: true,
          connectionTimeoutMillis: 50000,
        },
      }),
      TypeOrmModule.forFeature(entities)
    ],
    exports: [TypeOrmModule]
  })
  export class DbConnectionModule { }
  