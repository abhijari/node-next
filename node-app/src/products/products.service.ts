import { PrismaClient } from "@prisma/client";

class ProductService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
  async getAllProduct() {
    try {
      const products = await this.prisma.product.findMany();
      return products;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }
}

export const productService = new ProductService();
