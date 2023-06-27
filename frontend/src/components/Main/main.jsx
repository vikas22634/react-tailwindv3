function CreateCards(CardsTerms) {
  return (
    <Entry
      key={CardsTerms.id}
      img={CardsTerms.imgURL}
      name={CardsTerms.name}
      description={CardsTerms.description}
      steps={CardsTerms.steps}
      link={CardsTerms.Link}
    />
  );
}

function Main() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-blue-700">
        Take A Step To Our Nation
      </h1>
      <Link to="/RegistrationForm">Become a Volunteer</Link>
      {cards.map(CreateCards)}
    </div>
  );
}

export default Main;
