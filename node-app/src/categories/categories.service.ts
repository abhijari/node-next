import { PrismaClient } from "@prisma/client";

class CategoryService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
  getAllCategory() {
    try {
      const categories = this.prisma.category.findMany({
        select: {
          id: true,
          name: true,
        },
      });
      return categories;
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
    }
  }

  createCategory(data: any) {
    try {
      const category = this.prisma.category.create({
        data,
      });
      return category;
    } catch (error) {
      console.error("Error creating category:", error);
      throw error;
    }
  }
}

export const categoryService = new CategoryService();
