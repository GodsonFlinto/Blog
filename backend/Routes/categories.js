const express = require('express')
const router = express.Router()
const Category = require('../models/Category')

//get all Category
router.get('/', async(req, res)=>{
    try {
        const category = await Category.find()
        res.json(category)
    } catch (err) {
        res.status(500).json({message : err.message})
    }
})

//get a single category by id
router.get('/:id', async(req, res)=>{
    try {
        const category = await Category.findById(req.params.id)
        if(!category){
            return res.status(404).json({message: "Category not found"})
        }
        res.json(category)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
})

//create a new category
router.post('/', async(req, res)=>{
    const category = new Category({
        name : req.body.name,
        slug : req.body.slug,
        description : req.body.description
    })

    try {
        const newCategory = await category.save()
        res.status(201).json(newCategory)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

//update an existing category
router.put('/:id', async(req, res)=>{
    try {
        const category = await Category.findById(req.params.id)
        if(!category){
            return res.status(404).json({message: "Category not found"})
        }
        category.name = req.body.name || category.name
        category.slug = req.body.slug || category.slug
        category.description = req.body.description || category.description
        category.updatedAt = Date.now()

        const updatedCategory = await category.save()
        res.json(updatedCategory)

    } catch (error) {
        res.status(400).json({message : error.message})
    }
})

//delete a category
router.delete('/:id', async(req, res)=>{
    try {
        const category = await Category.findById(req.params.id)
        if(!category){
            return res.status(404).json({message : "Category not found"})
        }

        // await Category.deleteOne({_id:category._id})
        await Category.findByIdAndDelete(category._id)
        res.json({message : "Category Deleted"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router