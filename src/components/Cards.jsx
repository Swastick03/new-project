import React from 'react';
function Cards(){
    return(
        <div >
  <div class="card">
    <div class="card__header">
      <img src="https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaG5vbG9neSUyMGhkfGVufDB8fDB8fHww" alt="card__image" class="card__image" />
    </div>
    <div class="card__body">
      <span class="tag tag-blue">🖥️ Technology</span>
      
      <h4 >What's new in 2022 Tech Lorem ipsum dolor sit amet consectetur adipisicing  </h4>
      

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
    </div>
    <div class="card__footer">
      <div class="user">
        <img src="https://i.pravatar.cc/40?img=1" alt="user__image" class="user__image"/>
        <div class="user__info">
          <h5>Jane Doe</h5>
        </div>
        <div class="user__info1">
          <h7><i class="fa-regular fa-eye"></i> 1.4k views</h7>
          <a class="btn btn-light" href="#"> <i class="fa-solid fa-share-from-square"></i></a>
        </div>
        
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card__header">
      <img src="https://source.unsplash.com/600x400/?food" alt="card__image" class="card__image" />
    </div>
    <div class="card__body">
      <span class="tag tag-brown">🍇 Food</span>
      <h4>Delicious Food</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
    </div>
    <div class="card__footer">
      <div class="user">
        <img src="https://i.pravatar.cc/40?img=2" alt="user__image" class="user__image"/>
        <div class="user__info">
          <h5>Jony Doe</h5>
          
        </div>
        <div class="user__info1">
          <h7><i class="fa-regular fa-eye"></i> 1.4k views</h7>
          <a class="btn btn-light" href="#"> <i class="fa-solid fa-share-from-square"></i></a>
        </div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card__header">
      <img src="https://source.unsplash.com/600x400/?car,automobile" alt="card__image" class="card__image" />
    </div>
    <div class="card__body">
      <span class="tag tag-red">🚗 Automobile</span>
      <h4>Race to your heart content</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
    </div>
    <div class="card__footer">
      <div class="user">
        <img src="https://i.pravatar.cc/40?img=3" alt="user__image" class="user__image"/>
        <div class="user__info">
          <h5>John Do</h5>
    
        </div>
        <div class="user__info1">
          <h7><i class="fa-regular fa-eye"></i> 1.4k views</h7>
          <a class="btn btn-light" href="#"> <i class="fa-solid fa-share-from-square"></i></a>
        </div>
      </div>
    </div>
  </div>
  <div className='loc-text'>
  <i class="fa-solid fa-location-dot"></i>
    <input type='text' className='loc-input' placeholder='Noida,India'>
    </input>
    <i class="fa-solid fa-pen"></i>
    <br/>
    <span>
    
      Your location lorem  to be accessible. 
    </span>
  </div>
</div>
    );
}
export default Cards;