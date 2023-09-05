import { Module } from '@nestjs/common';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { AppController } from './app.controller';

@Module({
  imports: [
    DevtoolsModule.register({
      http: true,
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
