using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using StudentRegistrationAPI.Data;
using StudentRegistrationAPI.Models;

namespace StudentRegistrationAPI.Controllers
{
    [ApiController]
    [Route("api/registrations")]
    public class RegistrationsController : ControllerBase
    {
        private readonly AppDbContext _db;

        public RegistrationsController(AppDbContext db)
        {
            _db = db;
        }

        [HttpPost]
        public async Task<IActionResult> Register([FromBody] Student student)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            student.RegisteredAt = DateTime.UtcNow;
            _db.Students.Add(student);
            await _db.SaveChangesAsync();

            return Ok(new { message = "Registration successful", id = student.Id });
        }

        [Authorize]
        [HttpGet]
        public IActionResult GetAll()
        {
            var students = _db.Students
                .OrderByDescending(s => s.RegisteredAt)
                .ToList();

            return Ok(students);
        }
    }
}
