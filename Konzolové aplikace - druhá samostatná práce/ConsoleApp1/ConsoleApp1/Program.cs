using System;

public class ComplexNumber
{
    public double Real { get; set; }
    public double Imaginary { get; set; }

    public ComplexNumber(double real, double imaginary)
    {
        Real = real;
        Imaginary = imaginary;
    }

    public ComplexNumber Add(ComplexNumber other)
    {
        return new ComplexNumber(Real + other.Real, Imaginary + other.Imaginary);
    }

    public ComplexNumber Subtract(ComplexNumber other)
    {
        return new ComplexNumber(Real - other.Real, Imaginary - other.Imaginary);
    }

    public ComplexNumber Multiply(ComplexNumber other)
    {
        double realPart = Real * other.Real - Imaginary * other.Imaginary;
        double imagPart = Imaginary * other.Real + Real * other.Imaginary;
        return new ComplexNumber(realPart, imagPart);
    }

    public ComplexNumber Divide(ComplexNumber other)
    {
        double denominator = Math.Pow(other.Real, 2) + Math.Pow(other.Imaginary, 2);
        if (denominator == 0)
        {
            throw new ArgumentException("Dělení nulou není povoleno.");
        }

        double realPart = (Real * other.Real + Imaginary * other.Imaginary) / denominator;
        double imagPart = (Imaginary * other.Real - Real * other.Imaginary) / denominator;
        return new ComplexNumber(realPart, imagPart);
    }
}

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Zadejte realnou cast prvniho komplexniho cisla:");
        double realPart1 = double.Parse(Console.ReadLine());

        Console.WriteLine("Zadejte imaginarni cast prvniho komplexniho cisla:");
        double imagPart1 = double.Parse(Console.ReadLine());

        Console.WriteLine("Zadejte realnou cast druheho komplexniho cisla:");
        double realPart2 = double.Parse(Console.ReadLine());

        Console.WriteLine("Zadejte imaginarni cast druheho komplexniho cisla:");
        double imagPart2 = double.Parse(Console.ReadLine());

        ComplexNumber complex1 = new ComplexNumber(realPart1, imagPart1);
        ComplexNumber complex2 = new ComplexNumber(realPart2, imagPart2);

        ComplexNumber resultSum = complex1.Add(complex2);
        Console.WriteLine($"Soucet: {resultSum.Real} + {resultSum.Imaginary}");

        ComplexNumber resultDiff = complex1.Subtract(complex2);
        Console.WriteLine($"Rozdil: {resultDiff.Real} + {resultDiff.Imaginary}");

        ComplexNumber resultMult = complex1.Multiply(complex2);
        Console.WriteLine($"Soucin: {resultMult.Real} + {resultMult.Imaginary}");

        try
        {
            ComplexNumber resultDiv = complex1.Divide(complex2);
            Console.WriteLine($"Podil: {resultDiv.Real} + {resultDiv.Imaginary}");
        }
        catch (ArgumentException ex)
        {
            Console.WriteLine($"Chyba: {ex.Message}");
        }

        Console.Read();
    }
}
