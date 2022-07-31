for ( var i = 1; i <= 100; i++ )
{
  if ( i%3 === 0 && i%5 === 0 )
  {
    console.log( i + " TalentioCompany" );
  }
  else if ( i%3 === 0 ) 
  {
    console.log(i+ " Talentio" );
  }
  else if ( i%5 === 0 ) 
  {
    console.log(i+ " Company" );
  }
  else
  {
    console.log(i);
  }
