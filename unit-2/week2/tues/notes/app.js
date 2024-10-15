// | HTTP Method (Verb) | Path/Endpoint/URI     | CRUD Operation            | Route Name | Has Data Payload? | Purpose                                                                                            | Render/Redirect Action        |
// | ------------------ | --------------------- | ------------------------- | ---------- | ----------------- | -------------------------------------------------------------------------------------------------- | ----------------------------- |
// | GET                | `/blogs`              | Read all _blogs_          | index      | No                | Renders a view that shows all blogs                                                                | `res.render('blogs/index')`   |
// | GET                | `/blogs/:blogId`      | Read a specific _blog_    | show       | No                | Renders a view that shows a specific blog                                                          | `res.render('blogs/show')`    |
// | GET                | `/blogs/new`          | None                      | new        | No                | Renders a view including a form the user can fill out and submit to add a new blog                 | `res.render('blogs/new')`     |
// | GET                | `/blogs/:blogId/edit` | See note below*           | edit       | No                | Renders a view including a filled out form the user can edit and submit to update a specific blog  | `res.render('blogs/edit')`    |
// | POST               | `/blogs`              | Create a new _blog_       | create     | Yes               | Handles the user submitting a form to create a new blog                                            | `res.redirect('/you-choose')` |
// | PUT                | `/blogs/:blogId`      | Update a specific _blog_  | update     | Yes               | Handles the user submitting a form to update a specific blog                                       | `res.redirect('/you-choose')` |
// | DELETE             | `/blogs/:blogId`      | Delete a specific _blog_  | delete     | No                | Handles the user request to delete a specific blog                                                 | `res.redirect('/you-choose')` |

// *NOTE: The `edit` route may optionally read data for a specific blog to pre-fill data in the form that will ultimately be rendered to the user.


