import { Router } from 'express';

interface Item {
    id: number;
    name: string;
}

let items: Item[] = [];
let idCounter = 1;

export const router = Router();

// Create
router.post('/items', (req, res) => {
    const { name } = req.body;
    const newItem = { id: idCounter++, name };
    items.push(newItem);
    res.status(201).json(newItem);
});

// Read All
router.get('/items', (req, res) => {
    res.json([{ id: 1, name: 'item 1' }] );
});

// Read One
router.get('/items/:id', (req, res) => {
    const item = items.find(i => i.id === +req.params.id);
    item ? res.json(item) : res.status(404).send('Item not found');
});

// Update
router.put('/items/:id', (req, res) => {
    const item = items.find(i => i.id === +req.params.id);
    if (item) {
        item.name = req.body.name;
        res.json(item);
    } else {
        res.status(404).send('Item not found');
    }
});

// Delete
router.delete('/items/:id', (req, res) => {
    const index = items.findIndex(i => i.id === +req.params.id);
    if (index > -1) {
        items.splice(index, 1);
        res.sendStatus(204);
    } else {
        res.status(404).send('Item not found');
    }
});
