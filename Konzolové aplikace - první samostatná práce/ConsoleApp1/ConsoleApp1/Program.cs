using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace work
{
    using System;
    using System.Linq;

    class Program
    {
        static void Main()
        {
            while (true)
            {
                Console.WriteLine("Zadej sekvenci čísel oddělené čárkou.");
                string vstup = Console.ReadLine();
                string[] parts = vstup.Split(',');

                try
                {
                    int[] numbers = parts.Select(int.Parse).ToArray();
                    int minNumber = numbers.Min();
                    int maxNumber = numbers.Max();
                    int longestAscendingInterval = GetLongestAscendingInterval(numbers);

                    Console.WriteLine($"Nejmenší číslo je {minNumber}.");
                    Console.WriteLine($"Největší číslo je {maxNumber}.");
                    Console.WriteLine($"Délka nejdelšího vzestupného intervalu je {longestAscendingInterval}.");
                }
                catch (FormatException)
                {
                    Console.WriteLine("Znak není platné číslo, pokuste se problém upravit a zkuste to znovu.");
                }
            }
        }
        static int GetLongestAscendingInterval(int[] cisla)
        {
            int maxLength = 0;
            int currentLength = 1;

            for (int i = 1; i < cisla.Length; i++)
            {
                if (cisla[i] > cisla[i - 1])
                {
                    currentLength++;
                }
                else
                {
                    maxLength = Math.Max(maxLength, currentLength);
                    currentLength = 1;
                }
            }

            maxLength = Math.Max(maxLength, currentLength);
            return maxLength;
        }
    }

}