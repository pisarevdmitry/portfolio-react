'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    SkillSchema = new Schema({
        name: {
            type: String,
            required: [true, 'Укажите название навыка']
        },
        percents: {
            type: Number,
            required: [true, 'Укажите значение']
        },
        category: {
            type: String,
            required: [true, 'Укажите type']
        }
    });

//просим mongoose сохранить модель для ее дальнейшего использования
mongoose.model('skill', SkillSchema);