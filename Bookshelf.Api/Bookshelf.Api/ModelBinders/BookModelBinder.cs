using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.Extensions.Primitives;
using Newtonsoft.Json;
using System.IO;
using System.Threading.Tasks;
using System;
using Bookshelf.Api.Domain.Dto;
using System.Linq;

namespace Bookshelf.Api.ModelBinders
{
    /// <summary>
    ///     Implementazione del ModelBinder per <see cref="BookModelBinder" />
    /// </summary>
    public class BookModelBinder : IModelBinder
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="bindingContext"></param>
        /// <returns></returns>
        /// <exception cref="ArgumentNullException"></exception>
        public async Task BindModelAsync(ModelBindingContext bindingContext)
        {
            if (bindingContext == null) throw new ArgumentNullException(nameof(bindingContext));

            // read the request for any files
            var formFiles = bindingContext.ActionContext?.HttpContext?.Request?.Form?.Files;
            StringValues data = "";

            bindingContext.ActionContext?.HttpContext?.Request?.Form.TryGetValue("info", out data);
            var input = JsonConvert.DeserializeObject<BookDto>(data);

            if (formFiles != null && formFiles.Any())
            {
                var formFile = formFiles.First();
                using (var memoryStream = new MemoryStream())
                {
                    await formFile.CopyToAsync(memoryStream);
                    var bytes = memoryStream.ToArray();

                }
            }
            bindingContext.Result = ModelBindingResult.Success(input);
        }

    }
}
