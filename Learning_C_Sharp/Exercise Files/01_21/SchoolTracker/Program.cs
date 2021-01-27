using System;

namespace SchoolTracker
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("How many students in your class?");
            var studentCount = int.Parse(Console.ReadLine());

            var studentNames = new string[studentCount];
            var studentGrades = new int[studentCount];

            for (int i = 0; i < studentCount; i++)
            {
                Console.Write("Student Name: ");
                studentNames[i] = Console.ReadLine();

                Console.Write("Student Grade: ");
                studentGrades[i] = int.Parse(Console.ReadLine());
            }

            for (int i = 0; i < studentCount; i++)
            {
                Console.WriteLine("Name: {0}, Grade: {1}", studentNames[i], studentGrades[i]);
            }
        }
    }
}
