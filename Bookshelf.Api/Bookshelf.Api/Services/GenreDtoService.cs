using Bookshelf.Api.Database.Mappers;
using Bookshelf.Api.Database.Repositories;
using Bookshelf.Api.Domain.Configurations;
using Bookshelf.Api.Domain.Dto;
using Bookshelf.Api.Domain.Enums;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.IO;
using System.Transactions;

namespace Bookshelf.Api.Services
{
    public class GenreDtoService
    {
        private readonly ServerConfig _serverConfiguration;
        private readonly ServerConfig _serverConfigurationLegacy;

        private readonly ILogger _logger;
        private readonly ConnectionConfig _connectionConfig;
        private string _path;

        public GenreDtoService(IOptions<ServerConfig> serverIConfigOptions,
                    ILogger<GenreDtoService> logger,
                    IOptions<ServerConfig> serverIConfigOptionsLegacy,
                    IOptions<ConnectionConfig> connectionConfigOptions,
                    IOptions<AttachmentsConfig> options
                       )
        {
            _serverConfiguration = serverIConfigOptions.Value;
            _serverConfigurationLegacy = serverIConfigOptionsLegacy.Value;

            _path = options.Value.PATH;

            _connectionConfig = connectionConfigOptions.Value;


            try
            {
                var location = Environment.GetCommandLineArgs()[0];
                var appName = Path.GetFileName(location);
                appName = appName.Substring(0, appName.IndexOf("."));

                _serverConfigurationLegacy.FilesystemRoot = string.Format("{0}\\{1}", Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData), appName);
                _serverConfigurationLegacy.FilesystemTmp = string.Format("{0}\\{1}\\{2}", Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData), appName, "tmp");

                if (string.IsNullOrEmpty(_path))
                {
                    _serverConfiguration.FilesystemRoot = _serverConfigurationLegacy.FilesystemRoot;
                    _serverConfiguration.FilesystemTmp = _serverConfigurationLegacy.FilesystemTmp;
                }
                else
                {
                    _serverConfiguration.FilesystemRoot = string.Format("{0}\\{1}", _path, appName);
                    _serverConfiguration.FilesystemTmp = string.Format("{0}\\{1}\\{2}", _path, appName, "tmp");
                }
            }
            catch (Exception e)
            {
                _logger.LogError(e, e.Message);
                throw;
            }
        }

        public void Dispose()
        {
        }

       public GenreListDto Get(long id, GenreType genreType)
       {

            //dove avverrà lo switch dei vari generi

            try
            {
                GenreListDto dto = null;

                using (var scope = new TransactionScope(TransactionScopeAsyncFlowOption.Enabled))
                {
                    // switch per i vari generi

                    switch (genreType)
                    {
                        case GenreType.fiction:

                            //var genreRepository = new GenreDtoRepository(_connectionConfig);
                            //var genre = genreRepository.GetById(id);
                            //dto = GenreDtoMapper.MapToDto(genre);

                            break;

                        case GenreType.mystery:

                            break;

                        case GenreType.thriller:

                            break;

                        case GenreType.horror:

                            break;

                        case GenreType.historical:

                            break;

                        case GenreType.romance:

                            break;

                        case GenreType.western:

                            break;

                        case GenreType.science_fiction:

                            break;

                        case GenreType.fantasy:

                            break;

                        case GenreType.poetry:

                            break;
                    }

                    scope.Complete();
                }

            }
            catch(Exception ex)
            {
                _logger.LogError(ex, ex.Message);
                throw ex;
            }

            return null;
       }


    }
}
