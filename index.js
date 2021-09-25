const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://connor:gnPY8DDKcPxgIRWn@cluster0.fabc3.mongodb.net/test');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));