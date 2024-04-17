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
        double denominator = other.Real * other.Real + other.Imaginary * other.Imaginary;
        double realPart = (Real * other.Real + Imaginary * other.Imaginary) / denominator;
        double imagPart = (Imaginary * other.Real - Real * other.Imaginary) / denominator;
        return new ComplexNumber(realPart, imagPart);
    }
}

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Zadejte reálnou část prvního komplexního čísla:");
        double realPart1 = double.Parse(Console.ReadLine());

        Console.WriteLine("Zadejte imaginární část prvního komplexního čísla:");
        double imagPart1 = double.Parse(Console.ReadLine());

        Console.WriteLine("Zadejte reálnou část druhého komplexního čísla:");
        double realPart2 = double.Parse(Console.ReadLine());

        Console.WriteLine("Zadejte imaginární část druhého komplexního čísla:");
        double imagPart2 = double.Parse(Console.ReadLine());

        ComplexNumber complex1 = new ComplexNumber(realPart1, imagPart1);
        ComplexNumber complex2 = new ComplexNumber(realPart2, imagPart2);

        ComplexNumber resultSum = complex1.Add(complex2);
        Console.WriteLine($"Součet: {resultSum.Real} + {resultSum.Imaginary}i");

        ComplexNumber resultDiff = complex1.Subtract(complex2);
        Console.WriteLine($"Rozdíl: {resultDiff.Real} + {resultDiff.Imaginary}i");

        ComplexNumber resultMult = complex1.Multiply(complex2);
        Console.WriteLine($"Součin: {resultMult.Real} + {resultMult.Imaginary}i");

        ComplexNumber resultDiv = complex1.Divide(complex2);
        Console.WriteLine($"Podíl: {resultDiv.Real} + {resultDiv.Imaginary}i");
    }
}
