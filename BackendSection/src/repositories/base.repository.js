class BaseRepository {
    constructor(model) {
        this.model = model;
    }

    async get(id) {
        return await this.model.findoById(id);
    }

    async getAll() {
        return await this.model.find();
    }

    async create(entity) {
        return await this.model.create(entity);
    }

    async update(id, entity) {
        return await this.model.findoByIdAndUpdate(id, entity, { new: true })
    }

    async delete(id) {
        await this.model.findoByIdAndDelete(id);
        return true;
    }

}
module.export = BaseRepository;