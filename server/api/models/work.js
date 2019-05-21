'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    WorkSchema = new Schema({
        title: {
            type: String,
            required: [true, 'Укажите заголовок статьи']
        },
        tech: {
            type: String,
            required: [true, 'Укажите содержимое статьи']
        },
        link: {
            type: String,
            required: [true, 'Укажите линк']
        },
        file: {
            type: Object,
             required: [true, 'Укажите дату публикации']
        }
    });

//просим mongoose сохранить модель для ее дальнейшего использования
mongoose.model('work', WorkSchema);