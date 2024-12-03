import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Property } from './Entities/property.entity';
import { ExampleController } from './example/example.controller';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      url: "postgresql://demo_owner:rz4PclGjqo9R@ep-frosty-block-a5muddjd.us-east-2.aws.neon.tech/demo?sslmode=require",
      type: "postgres",
      port: 3306,
      entities: [Property], // __dirname+'/**/*.entity{.ts,.js}' for all files that end with entity and .ts or .js
      synchronize: true
    }),
  ],
  controllers: [ExampleController], // Register the controller here
  providers: [],
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