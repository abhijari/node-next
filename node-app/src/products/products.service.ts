import { PrismaClient } from "@prisma/client";

class ProductService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
  async getAllProduct() {
    try {
      const products = await this.prisma.product.findMany({
        select: {
          id: true,
          name: true,
          category: true,
          categoryId: true,
          quantity: true,
          price: true,
        },
      });
      return products;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }

  async createProduct(data: any) {
    try {
      const product = await this.prisma.product.create({
        data,
      });
      return product;
    } catch (error) {
      console.error("Error creating product:", error);
      throw error;
    }
  }
}

export const productService = new ProductService();
