document.getElementById('get-started-btn').addEventListener('click', function() {
    document.getElementById('generate-recipes').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('generate-btn').addEventListener('click', function() {
    const ingredients = document.getElementById('ingredients-input').value;
    const cuisine = document.getElementById('cuisine-select').value;
    const dietary = document.getElementById('dietary-select').value;
    const mealType = document.getElementById('meal-type-select').value;
    const cookingTime = document.getElementById('cooking-time-select').value;
    const mealAttributes = document.getElementById('meal-attributes-select').value;

    // Simulate recipe generation (replace with your actual AI call)
    const recipes = generateMockRecipes(ingredients, cuisine, dietary, mealType, cookingTime, mealAttributes);
    displayRecipes(recipes);
});

function generateMockRecipes(ingredients, cuisine, dietary, mealType, cookingTime, mealAttributes) {
    // Replace with your AI logic
    return [
        {
            title: 'Mock Recipe 1',
            image: 'https://via.placeholder.com/300',
            ingredients: ['Ingredient A', 'Ingredient B'],
            steps: ['Step 1', 'Step 2'],
            time: '30 minutes',
            nutrition: 'Calories: 300',
            tips: 'Tip 1'
        },
        {
            title: 'Mock Recipe 2',
            image: 'https://via.placeholder.com/300',
            ingredients: ['Ingredient C', 'Ingredient D'],
            steps: ['Step A', 'Step B'],
            time: '45 minutes',
            nutrition: 'Calories: 450',
            tips: 'Tip 2'
        }
    ];
}

function displayRecipes(recipes) {
    const resultsDiv = document.getElementById('recipe-results');
    resultsDiv.innerHTML = ''; // Clear previous results

    if (recipes.length === 0) {
        resultsDiv.innerHTML = '<p>No recipes found.</p>';
        return;
    }

    recipes.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe-preview');
        recipeDiv.innerHTML = `
            <h3>${recipe.title}</h3>
            <img src="${recipe.image}" alt="${recipe.title}" style="max-width: 150px;">
            <button class="view-recipe-btn" data-recipe-title="${recipe.title}">View Recipe</button>
        `;
        resultsDiv.appendChild(recipeDiv);
    });

    // Add event listeners for view recipe buttons
    document.querySelectorAll('.view-recipe-btn').forEach(button => {
        button.addEventListener('click', function() {
            const recipeTitle = this.getAttribute('data-recipe-title');
            const recipe = recipes.find(r => r.title === recipeTitle);
            if (recipe) {
                displayRecipeDetails(recipe);
            }
        });
    });
}

function displayRecipeDetails(recipe) {
    document.getElementById('recipe-detail-title').textContent = recipe.title;
    document.getElementById('recipe-detail-image').src = recipe.image;
    document.getElementById('recipe-detail-ingredients').innerHTML = '<strong>Ingredients:</strong> ' + recipe.ingredients.join(', ');
    document.getElementById('recipe-detail-steps').innerHTML = '<strong>Steps:</strong> ' + recipe.steps.join('<br>');
    document.getElementById('recipe-detail-time').textContent = recipe.time;
    document.getElementById('recipe-detail-nutrition').innerHTML = '<strong>Nutrition:</strong> ' + recipe.nutrition;
    document.getElementById('recipe-detail-tips').innerHTML = '<strong>Tips:</strong> ' + recipe.tips;

    document.getElementById('recipe-detail').style.display = 'block';
    document.getElementById('recipe-detail').scrollIntoView({ behavior: 'smooth' });
}

// Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');

    let counter = 0;
    const slideWidth = carouselItems[0].clientWidth;

    carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;

    // Next Button Click
    nextButton.addEventListener('click', () => {
        if (counter >= carouselItems.length - 1) return;
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter++;
        carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
    });

    // Prev Button Click
    prevButton.addEventListener('click', () => {
        if (counter <= 0) return;
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter--;
        carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
    });

    carouselSlide.addEventListener('transitionend', () => {
        // Note: The cloning logic seems incomplete in the original code.
        // If you intend to have infinite looping, this part would need to be implemented correctly.
        // For now, I've kept the original logic.
        if (carouselItems[counter].id === 'lastClone') {
            carouselSlide.style.transition = "none";
            counter = carouselItems.length - 2;
            carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
        }
        if (carouselItems[counter].id === 'firstClone') {
            carouselSlide.style.transition = "none";
            counter = carouselItems.length - counter;
            carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
        }
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic form validation (you can add more robust validation)
    if (!name || !email || !message) {
        document.getElementById('formMessage').textContent = 'Please fill in all required fields.';
        return;
    }

    // Simulate form submission (replace with your backend logic)
    console.log('Form submitted:', { name, email, message });
    document.getElementById('formMessage').textContent = 'Thank you for your feedback!';

    // Clear form fields after submission
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';
});

const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(section => {
    observer.observe(section);
});
