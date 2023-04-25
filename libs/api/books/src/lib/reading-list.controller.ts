import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ReadingListService } from '@tmo/api/books';
import { Book, ReadingListItem } from '@tmo/shared/models';

@Controller()
export class ReadingListController {
  constructor(private readonly readingList: ReadingListService) {}

  @Put('/reading-list/:id/finished')
  async markAsRead(@Param() params, @Body() item: ReadingListItem) {
    return await this.readingList.markAsRead(params.id);
  }

  @Get('/reading-list/')
  async getReadingList() {
    return await this.readingList.getList();
  }

  @Post('/reading-list/')
  async addToReadingList(@Body() item: Book) {
    return await this.readingList.addBook(item);
  }

  @Delete('/reading-list/:id')
  async removeFromReadingList(@Param() params) {
    return await this.readingList.removeBook(params.id);
  }
}
