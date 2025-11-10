// Wait for the DOM to be fully loaded before running any script
document.addEventListener('DOMContentLoaded', function() {

    //======================================
    //== VANILLA JAVASCRIPT (DOM) SECTION ==
    //======================================

    // 1. getElementById & innerHTML
    const titleButton = document.getElementById('btn-change-title');
    titleButton.addEventListener('click', function() {
        const mainTitle = document.getElementById('main-title');
        mainTitle.innerHTML = "Title Changed by <code>getElementById</code>!";
    });

    // 2. getElementsByTagName
    const parasButton = document.getElementById('btn-change-paras');
    parasButton.addEventListener('click', function() {
        // Get all <p> tags inside the *entire document*
        const allParagraphs = document.getElementsByTagName('p');
        for (let i = 0; i < allParagraphs.length; i++) {
            allParagraphs[i].innerHTML = "All <strong>&lt;p&gt;</strong> tags changed!";
        }
    });

    // 3. getElementsByClassName & Change CSS (color)
    const highlightButton = document.getElementById('btn-highlight-content');
    highlightButton.addEventListener('click', function() {
        // Get all elements with the class "content-para"
        const contentParas = document.getElementsByClassName('content-para');
        for (let i = 0; i < contentParas.length; i++) {
            contentParas[i].style.color = '#dc3545'; // Red
            contentParas[i].style.fontWeight = 'bold';
            contentParas[i].style.backgroundColor = '#f8d7da'; // Light red
        }
    });

    // 4. Change CSS (position)
    const moveImgButton = document.getElementById('btn-move-img');
    moveImgButton.addEventListener('click', function() {
        const img = document.getElementById('profile-pic');
        // Get current 'left' value, or default to 0
        let currentLeft = parseInt(img.style.left) || 0;
        // Add 20px to the current position
        img.style.left = (currentLeft + 20) + 'px';
    });

    // 5. Change Banner Image Source (src)
    const changeImgButton = document.getElementById('btn-change-img');
    changeImgButton.addEventListener('click', function() {
        const img = document.getElementById('profile-pic');
        // Check current src and toggle between two images
        if (img.src.includes('Banner')) {
            img.src = 'https://placehold.co/600x300/ffc107/white?text=New+Banner';
            img.alt = 'A second placeholder image';
        } else {
            img.src = 'https://placehold.co/600x300/007bff/white?text=Profile+Banner';
            img.alt = 'A placeholder profile banner';
        }
    });

    // 6. *** NEW *** Change Avatar Image Source (src)
    const changeAvatarButton = document.getElementById('btn-change-avatar');
    changeAvatarButton.addEventListener('click', function() {
        const avatar = document.getElementById('avatar-pic');
        if (avatar.src.includes('Avatar1')) {
            avatar.src = 'https://placehold.co/100x100/dc3545/white?text=Avatar2';
        } else {
            avatar.src = 'https://placehold.co/100x100/333/white?text=Avatar1';
        }
    });

    // 7. Add a text node and attach it
    const addCommentButton = document.getElementById('btn-add-comment');
    addCommentButton.addEventListener('click', function() {
        const commentList = document.getElementById('comment-list');
        const newListItem = document.createElement('li');
        const newCommentText = document.createTextNode('This is a new comment added by JS.');
        newListItem.appendChild(newCommentText);
        commentList.appendChild(newListItem);
    });

    // 8. Delete a node
    const delCommentButton = document.getElementById('btn-del-comment');
    delCommentButton.addEventListener('click', function() {
        const commentList = document.getElementById('comment-list');
        const firstComment = commentList.getElementsByTagName('li')[0];
        
        if (firstComment) {
            commentList.removeChild(firstComment);
        } else {
            alert('No more comments to delete!');
        }
    });

}); // End of Vanilla JS DOMContentLoaded


//============================
//== JQUERY SECTION ==
//============================
$(document).ready(function() {

    // 1. Change button text using jQuery
    $('#jq-btn-text').click(function() {
        $(this).text('jQuery Changed This Text!');
    });

    // 2. *** NEW *** Toggle visibility with animation
    $('#jq-btn-toggle-bio').click(function() {
        // Use slideToggle() for a smooth animation
        $('#bio-section').slideToggle(400); 
    });

    // 3. Set background-image using jQuery CSS property
    $('#jq-btn-bg').click(function() {
        const imageUrl = $('#bg-image-url').val();
        
        if (imageUrl) {
            $('#content-area').css('background-image', 'url(' + imageUrl + ')');
            // Also make the text white so it's readable
            $('#content-area').css('color', '#fff');
            $('#main-title').css('color', '#fff'); // Ensure title is also readable
        }
    });

    // 4. Access HTML form data using jQuery
    $('#jq-btn-form').click(function() {
        const name = $('#form-name').val();
        
        if (name.trim() === '') {
            alert('Please enter a name first.');
        } else {
            alert('Form data accessed: ' + name);
        }
    });

    // 5. Add attribute using jQuery
    $('#jq-btn-attr').click(function() {
        // Add a 'data-custom-attribute' to the BANNER image
        $('#profile-pic').attr('data-custom-attribute', 'jQuery-was-here');
        
        $(this).text('Attribute Added! (Inspect Banner)');
    });

});