document.addEventListener('DOMContentLoaded', () => {
    // Define the array of available glasses brands | MAKE SURE THE NAME IS CAPITALIZED
    let items = ["Chanel", "Gotti", "Orgreen", "Matsuda", "Chrome Hearts", "Oliver People", "Res/Rei", "Oakley", "Maui Jim", "O&X", "Tiffany", "Rayban", "Lindberg", "Versace", "F-In-Eyewear"];
    
    items.sort(); // Sort alphabetically

    const glassesList = document.getElementById('glassesList');
    glassesList.innerHTML = ""; // Reset list before adding new items

    // Create 'li' elements with links inside
    items.forEach(item => {
        const addListItem = document.createElement("li");
        const link = document.createElement("a");

        link.textContent = item; 
        
        // linking each item using "item-name".html format; Example: "oliver-people.html". Removes "/", "&", and spaces, replacing with "-"
        link.href = `brands/${item.replace(/\s+/g, '-').replace(/\//g, '-').replace(/&/g, '-').toLowerCase()}.html`;
        
        addListItem.appendChild(link);
        glassesList.appendChild(addListItem);
    });

    // Dynamic width adjustment for each list item
    document.querySelectorAll(".list li").forEach((li, index) => {
        li.style.width = `${20 + index * 5}%`; // Start at 20% and increase by 5% each
    });

    // Console check for success
    console.log(items, "items successfully sorted alphabetically and linked to local HTML files.");
});

document.addEventListener("mousemove", (e) => {
    const unblur = document.querySelector(".unblur");
    const maskSize = 700; // Adjust this value to change the area of unblur
    
    unblur.style.webkitMaskImage = `radial-gradient(circle ${maskSize}px at ${e.clientX}px ${e.clientY}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)`;
    unblur.style.maskImage = `radial-gradient(circle ${maskSize}px at ${e.clientX}px ${e.clientY}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)`;
});