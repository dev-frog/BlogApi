import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('blogs')
export class BlogsController {
  @Post('/')
  async createBlog() {
    return `create blog`;
  }

  @Get('/')
  async getAllBlog() {
    return `getAllBlog`;
  }

  @Get('/:id')
  async getBlogById(id: number) {
    return `getBlogById ${id}`;
  }

  @Put('/:id')
  async updateBlogById(id: number) {
    return `update blogById ${id}`;
  }

  @Delete('/')
  async deleteBlogById(id: number) {
    return `delete blogById ${id}`;
  }
}
