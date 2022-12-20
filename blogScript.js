const formBlogElement = document.getElementById("form-blog");
formBlogElement.addEventListener("submit", function (event) {
  event.preventDefault();

  // make a button that prints hello world when clicked
  console.log("hello world");

  // print out all 3 variables
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  console.log(name, email, message); // klaus, k@g.com, hey there

  // create a message with timestamp, like the blog post in a template literal
  const date = new Date();
  const dateLongForm = date.toLocaleString("en-US", {
    weekday: "long",
    timeZone: "UTC",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  console.log("date", date, "->", dateLongForm);

  // save template literal into a variable to upload into blog posts
  const blogPost = `${dateLongForm} by ${name}\n${message}`;
  console.log(blogPost);

  //   upload into blog section
  //  1. find out where in the html to append
  //  2. create html to upload in `blogPost` into
  //  3. clean up form (make everything empty)

  //   1. find out where in the html to append
  const lastBlogPost = document.getElementById("daisy-post").lastElementChild;
  console.log(lastBlogPost);

  // 2.1 craete html element
  const blogPostDiv = document.createElement("div");
  blogPostDiv.className = "daisy-post";
  blogPostDiv.innerHTML =
    '<img src="./assets/blog-image-4.jpg" alt="image of man behind leaves" />';
  const paragraphElement = document.createElement("p");
  paragraphElement.textContent = blogPost;

  // 2.2 append into proper places
  blogPostDiv.appendChild(paragraphElement);
  lastBlogPost.appendChild(blogPostDiv);
});
