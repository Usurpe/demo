import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Property } from './Entities/property.entity';
import { ApiExampleController } from './api-example/api-example.controller';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      url: "postgresql://demo_owner:rz4PclGjqo9R@ep-frosty-block-a5muddjd.us-east-2.aws.neon.tech/demo?sslmode=require",
      type: "postgres",
      port: 3306,
      entities: [Property],
      synchronize: true
    }),
  ],
  controllers: [ApiExampleController],
})
export class AppModule {}



// replace this for local database
/* 

      type: 'postgres', // or mysql, sqlite, etc.
      host: 'localhost',
      port: 5432, // PostgreSQL's default port
      username: 'username',
      password: 'password',
      database: 'database name',
      entities: [Property],
      synchronize: true, // only for development, not recommended in production

      */


synchronize: true