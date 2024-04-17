using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OOP
{
    class Program
    {
        static void Main(string[] args)
        {
            Vector vector = new Vector(1, 1);//vytvoření nové instance třídy Vector
            Vector vector2 = new Vector(1, 1);
            vector.Add(vector2);//zavolání metody Add, jako argument je použita instance třídy Vector
            Vector vector3 = vector.Sum(vector2);
            vector3.Add(1.1, 2.2);//zavolání metody Add, jako argumenty jsou použité hodnoty typu double

            Vector3 v3 = new Vector3(1, 2, 3);//Vytvoření 3D vektoru
            Vector3 v31 = new Vector3(4, 5, 6);

            v3.Add(v31);
            v3.Add(vector);

            Console.WriteLine(vector);//Díky přetížení metody ToString budou instance třídy Vector automaticky převáděny na textové řetězce
            Console.WriteLine(v3);
            Console.Read();
        }
    }
    //třída reprezentující 3D vektory
    class Vector3 : Vector//třída Vector3 dědí ze třídy Vector
    {
        public double Z;//nový atribut, který ve třídě Vector nebyl
        public Vector3(double x, double y, double z) : base(x, y)//slovo base slouží jakožto odkaz na rodičovskou třídu - base(x, y) zavolá konstruktor rodičovské třídy a předá mu hodnoty parametrů x a y
        {
            Z = z;
        }
        //implementace metody pro sčítání 3D vektorů
        //jelikož je z velké části stejná jako u 2D vektorů je možné se odkázat na pomocí slova base na metodu z rodičovské třídy
        public void Add(Vector3 newVector)
        {
            base.Add(newVector);
            Z += newVector.Z;
        }
        //přepsání metody z rodičovské třídy
        public override string ToString()
        {
            return base.ToString() + "; " + Z;
        }
    }
    //třída reprezentující 2D vektory
    class Vector
    {
        //veřejné atributy X a Y
        public double X;
        public double Y;
        //konstruktor třídy Vector se dvěma parametry
        public Vector(double x, double y)
        {
            X = x;
            Y = y;
        }
        //metoda, která k instanci na které byla zavolána přičte hodnoty atributů X a Y parametru newVector
        public void Add(Vector newVector)
        {
            X += newVector.X;
            Y += newVector.Y;
        }
        //metoda, která k instanci na které byla zavolána přičte hodnoty parametrů x a y
        public void Add(double x, double y)
        {
            X += x;
            Y += y;
        }
        //metoda, která vrátí novou instanci třídy vektor, která je součtem instance this a paremetru new Vector
        public Vector Sum(Vector newVector)
        {
            return new Vector(X + newVector.X, Y + newVector.Y);
        }
        //přepsání metody pro převod na textový řetězec
        public override string ToString()
        {
            return X + "; " + Y;
        }
    }
}
