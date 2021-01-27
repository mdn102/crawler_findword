using System;

namespace Survey
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("What is your name?");
            var name = TryAnswer();

            Console.WriteLine("What is your age?");
            var age = TryAnswer();

            Console.WriteLine("What month were you born in?");
            var month = TryAnswer();

            Console.WriteLine("Your name is: {0}", name);
            Console.WriteLine("Your age is: {0}", age);
            Console.WriteLine("Your birth month is: {0}", month);

            if (month == "march")
            {
                Console.WriteLine("you are an Aries.");
            }
            else if (month == "april")
            {
                Console.WriteLine("you are a Taurus.");
            }
            else if (month == "may")
            {
                Console.WriteLine("you are a Gemini.");
            }
        }

        static string TryAnswer()
        {
            var question = Console.ReadLine();
            if (question == "")
            {
                Console.WriteLine("You didn't type anything, please try again:");
                return Console.ReadLine();
            }
            return question;
        }
    }
}
