<template>
  <div class="main-container">
    <div class="response-container">
      <div class="response-child">
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere esse,
          consequuntur iure itaque sint nisi deleniti excepturi ea culpa
          tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Saepe, quod.
        </p>
      </div>
      <div class="response-child">
        <h2>Lorem, ipsum dolor.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, cum
          quaerat. Earum quae qui reprehenderit porro blanditiis ipsa in quod!
        </p>
      </div>
    </div>
    <div class="how-we-work">
      <div class="left-child">
        <h1>HOW WE WORK</h1>
      </div>
      <div class="right-child">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Aut deleniti voluptatem
          alias velit doloremque quia inventore assumenda, neque eum unde!
          Reprehenderit soluta est, accusamus aspernatur aperiam earum suscipit
          alias ipsum. Maxime, aut?
        </p>
      </div>
    </div>
    <div class="fact-container">
      <div class="child">
        <div class="text">
          <h1>$12.2B</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div class="child">
        <div class="text">
          <h1>$12.2B</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div class="child">
        <div class="text">
          <h1>$12.2B</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
    <div class="what-we-do">
      <div class="left">
        <h1>WHAT WE DO</h1>
      </div>
      <div class="right">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quasi
          inventore sequi excepturi perspiciatis accusantium? Explicabo magnam
          dignissimos aliquid minima!
        </p>
        <div class="list">
          <h4>Democratic Practise</h4>
          <h4>Democratic Practise</h4>
          <h4>Democratic Practise</h4>
          <h4>Democratic Practise</h4>
        </div>
        <div class="list">
          <h4>Higher Education</h4>
          <h4>Democratic Practise</h4>
          <h4>Democratic Practise</h4>
          <h4>Democratic Practise</h4>
        </div>
      </div>
    </div>
    <div class="george">
      <div class="left">
        <h1>GEORGE SOROS</h1>
      </div>
      <div class="right">
        <img
          src="https://opensocietyfoundations.imgix.net/uploads/ec56cb12-3f88-46c5-b927-7e18e48d5b86/2017-0608-welters-berlin-eriac-launch-9113-cc-3000.jpg?auto=compress%2Cformat&fit=min&fm=jpg&h=645&q=80&rect=0%2C250%2C3000%2C1695&w=1140"
          alt="georgePIC"
        />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          amet fugit aperiam minus vel odio tempora optio accusamus,
          necessitatibus, iusto accusantium in at qui corporis!
        </p>
        <a href="#">Lorem ipsum dolor sit amet consectetur.</a>
      </div>
    </div>
    <div class="subscribe">
      <div class="left">
        <h3>Subscribe to updates about Open Society’s work around the world</h3>
      </div>
      <div class="right">
        <input type="email" name="mail" placeholder="Your E-mail address" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* s */
.response-container {
  display: flex;
  flex-wrap: wrap;
  background-color: #05d192;
  padding: 7rem 12rem 5rem;
  position: relative;
}
.response-container::before {
  content: "Open Society’s Response to COVID-19";
  position: absolute;
  top: 2rem;
  font-size: 1.8rem;
  margin-left: 29px;
}

.response-child {
  flex: 1;
  margin: 0 2rem;
}
.response-child h2 {
  font-size: 1.8rem;
  margin-bottom: 2rem;
}
.how-we-work {
  margin: 5rem 12rem;
  display: flex;
  flex-wrap: wrap;
}
.how-we-work .left-child {
  flex: 1;
}
.how-we-work .right-child {
  flex: 2;
}
.how-we-work .right-child p {
  font-size: 1.5rem;
}
.fact-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.fact-container .child {
  margin: 2rem 5rem;
  border-top: 1px solid silver;
  border-bottom: 1px solid silver;
}
.fact-container .child .text {
  margin: 4rem;
}
.fact-container .child h1 {
  font-size: 3rem;
}
.what-we-do {
  display: flex;
  /* padding: 0rem 12rem; */
  margin: 5rem 12rem;
  border-top: 3px solid silver;
  padding-top: 7rem;
}
.what-we-do .right {
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  flex: 2;
}
.what-we-do .right p {
  font-size: 1.5rem;
}

.what-we-do .left {
  flex: 1;
}
.what-we-do .right .list {
  margin: 3rem 1rem;
  flex: auto;
  cursor: pointer;
}
.what-we-do .right .list h4:hover {
  opacity: 0.4;
}
.what-we-do .right .list h4 {
  border-top: 1px solid silver;
  border-bottom: 1px solid silver;
  padding: 2rem;
}
.george {
  display: flex;
  /* padding: 0rem 12rem; */
  margin: 5rem 12rem;
  padding-top: 3rem;
  border-top: 3px solid silver;
}

.george .left {
  flex: 1;
}
.george .right {
  flex: 2;
}
.george .right p {
  margin: 2rem 0;
  font-size: 1.2rem;
}
.george .right a {
  color: black;
}
.george .right img {
  width: 90%;
}
.subscribe {
  background-color: #05d192;
  padding: 7rem 12rem 5rem;
  display: flex;
}
.subscribe .left {
  font-size: 1.2rem;
  flex: 1;
}
.subscribe .right {
  flex: 1;
  margin-left: 3rem;
}
.subscribe input {
  border: none;
  outline: none;
  background-color: inherit;
  font-size: 1.2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid black;
}
@media only screen and (max-width: 1240px) {
  .response-container {
    padding: 2rem;
  }
  .george {
    margin: 2rem;
    padding-top: 3rem;
  }
  .what-we-do {
    margin: 2rem;
    padding-top: 3rem;
  }
  .response-container::before {
    top: 0;
    font-size: 1.8rem;
    margin-left: 29px;
  }
  .how-we-work {
    margin: 5rem;
  }
}
</style>