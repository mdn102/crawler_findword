using System;

namespace outreference
{
    class Program
    {
        static void Main(string[] args)
        {
            var x = 2;

            Console.WriteLine(x);

            Five(out x);

            Console.WriteLine(x);


        }

        static void Five(out int a)
        {
            a = 5;
            Console.WriteLine(a);
        }
    }
}
