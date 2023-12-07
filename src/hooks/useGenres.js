const useGenres = (selectedGenres) => {
    if (selectedGenres.length < 1) return "";

    // get id for each genre then reduce to the id codes
    const genreIDs = selectedGenres.map((g) => g.id);
    return genreIDs.reduce((acc, cur) => acc + ',' + cur);
}

export default useGenres;