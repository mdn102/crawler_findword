using System;

namespace SchoolTracker
{
    class Program
    {
        static void Main(string[] args)
        {
            var studentGrades = new int[] { 80, 77, 45, 87, 53, 43, 67, 24, 86, 98 };

            foreach (var studentGrade in studentGrades)
            {
                Console.WriteLine(studentGrade);
            }
        }
    }
}
