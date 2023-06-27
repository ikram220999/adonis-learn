import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Post from "App/Models/Post";

export default class PostsController {
  public async index({ request, response }: HttpContextContract) {
    return [
      {
        id: 1,
        title: "Hello world",
      },
      {
        id: 2,
        title: "Hello universe",
      },
    ];
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {
    const post = new Post();

    post.title = "Kambing";
    post.description = "Kambing yang sedap";
    post.save();

    return post;
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
