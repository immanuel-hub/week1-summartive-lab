function ProjectForm({onAdd}){
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get('title');
    const description = formData.get('description');

if (title && description){
  onAdd({
  id: Date.now(), 
  title: title.trim(),
  description: description.trim(),
});
    e.target.reset();
    }
};
  return (
    <section className="add-project-section">
    <form onSubmit={handleSubmit}className="add-project-form">
    <h2>Add Project</h2>
    <div className="form-group">
      <label htmlFor="title">Title</label>
      <input type="text" id="title" name="title" required />

    </div>
        
    <div className="form-group">
      <label htmlFor="description">Description</label>
      <textarea id="description" name="description" required></textarea>
    </div>

     <button type="submit" className="add-btn">Add</button>
    </form>
    </section>
  );
}
export default ProjectForm;
