#include <iostream.h>
#include <fstream.h>
#include <apstring.h>
#include <stdlib.h>

#define CARNIVORE_BIRTH_RATE .02
#define HERBIVORE_BIRTH_RATE .2
#define PRODUCER_BIRTH_RATE 2
#define PRODUCER_CARRYING_CAPACITY 100000

double min(double a, double b);
double max(double a, double b);

void main()
{
	double producer, herbivore, carnivore;
	int time;

	apstring fileName = "F:\\Documents and Settings\\Administrator\\Desktop\\results\\";
	apstring temp;

	cout << "Input initial producer population size (negative for default): ";
	cin >> producer;
	cout << "Input initial herbivore population size (negative for default): ";
	cin >> herbivore;
	cout << "Input initial carnivore population size (negative for default): ";
	cin >> carnivore;
	cout << "Input amount of iterations: ";
	cin >> time;
	cout << "Input the file name to be stored to (do not add file extension)" << endl << "(type 'none' to have it output to console)" << endl << fileName;
	cin >> temp;
	cin.get();
	cout << endl << endl;

	ofstream infile;

	if(temp != "none")
	{
		fileName += temp;
		fileName += ".txt";

		infile.open(fileName.c_str());
		if(infile.fail())
		{
			cerr << "ERROR: Unable to open file " << fileName << endl;
			abort();
		}
	}

	if(producer < 0)
		producer = 10000;
	if(herbivore < 0)
		herbivore = 1000;
	if(carnivore < 0)
		carnivore = 100;

	if(temp != "none")
		infile << producer << " " << herbivore << " " << carnivore << endl;
	
	
	for(int t=1;t<=time;t++)
	{
		carnivore += (CARNIVORE_BIRTH_RATE*min(herbivore, max(0, 1*carnivore)/1) - carnivore + min(herbivore, max(0, 1*carnivore)/1));
		herbivore += (HERBIVORE_BIRTH_RATE*min(producer, max(0, 1*herbivore)/1) - herbivore + min(producer, max(0, 1*herbivore)/1));
		producer += (((producer - min(producer, max(0, 1*herbivore)))*PRODUCER_BIRTH_RATE*(1-producer/PRODUCER_CARRYING_CAPACITY)) - min(producer, max(0, 1*herbivore)/1));
		
		if(temp == "none")
		{
			cout << "Iteration[" << t << "]" << endl;
			cout << "Producer population size: " << producer << endl;
			cout << "Herbivore population size: " << herbivore << endl;
			cout << "Carnivore population size: " << carnivore << endl;
			cin.get();
			cout << endl << endl << endl;
		}
		else
			infile << producer << " " << herbivore << " " << carnivore << endl;

	}
}

double min(double a, double b)
{
	if(a < b)
		return a;
	return b;
}

double max(double a, double b)
{
	if(a > b)
		return a;
	return b;
}
